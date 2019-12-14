import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заволакиваться: PerfectVerb = {
  name: Word('заволакиваться', 5),
  singular1stPerson: Word('заволакиваюсь', 5),
  singular2ndPerson: Word('заволакиваешься', 5),
  singular3rdPerson: Word('заволакивается', 5),
  plural1stPerson: Word('заволакиваемся', 5),
  plural2ndPerson: Word('заволакиваетесь', 5),
  plural3rdPerson: Word('заволакиваются', 5),
  masculinePast: Word('заволакивался', 5),
  femininePast: Word('заволакивалась', 5),
  neuterPast: Word('заволакивалось', 5),
  pluralPast: Word('заволакивались', 5),
  imperativeInformal: Word('заволакивайся', 5),
  imperativeFormal: Word('заволакивайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(заволакиваться.name.text, заволакиваться);

export { заволакиваться };