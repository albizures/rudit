import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const настраиваться: PerfectVerb = {
  name: Word('настраиваться', 5),
  singular1stPerson: Word('настраиваюсь', 5),
  singular2ndPerson: Word('настраиваешься', 5),
  singular3rdPerson: Word('настраивается', 5),
  plural1stPerson: Word('настраиваемся', 5),
  plural2ndPerson: Word('настраиваетесь', 5),
  plural3rdPerson: Word('настраиваются', 5),
  masculinePast: Word('настраивался', 5),
  femininePast: Word('настраивалась', 5),
  neuterPast: Word('настраивалось', 5),
  pluralPast: Word('настраивались', 5),
  imperativeInformal: Word('настраивайся', 5),
  imperativeFormal: Word('настраивайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(настраиваться.name.text, настраиваться);

export { настраиваться };