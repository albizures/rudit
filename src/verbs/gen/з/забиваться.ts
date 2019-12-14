import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const забиваться: PerfectVerb = {
  name: Word('забиваться', 5),
  singular1stPerson: Word('забиваюсь', 5),
  singular2ndPerson: Word('забиваешься', 5),
  singular3rdPerson: Word('забивается', 5),
  plural1stPerson: Word('забиваемся', 5),
  plural2ndPerson: Word('забиваетесь', 5),
  plural3rdPerson: Word('забиваются', 5),
  masculinePast: Word('забивался', 5),
  femininePast: Word('забивалась', 5),
  neuterPast: Word('забивалось', 5),
  pluralPast: Word('забивались', 5),
  imperativeInformal: Word('забивайся', 5),
  imperativeFormal: Word('забивайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(забиваться.name.text, забиваться);

export { забиваться };