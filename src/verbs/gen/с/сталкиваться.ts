import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сталкиваться: PerfectVerb = {
  name: Word('сталкиваться', 2),
  singular1stPerson: Word('сталкиваюсь', 2),
  singular2ndPerson: Word('сталкиваешься', 2),
  singular3rdPerson: Word('сталкивается', 2),
  plural1stPerson: Word('сталкиваемся', 2),
  plural2ndPerson: Word('сталкиваетесь', 2),
  plural3rdPerson: Word('сталкиваются', 2),
  masculinePast: Word('сталкивался', 2),
  femininePast: Word('сталкивалась', 2),
  neuterPast: Word('сталкивалось', 2),
  pluralPast: Word('сталкивались', 2),
  imperativeInformal: Word('сталкивайся', 2),
  imperativeFormal: Word('сталкивайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(сталкиваться.name.text, сталкиваться);

export { сталкиваться };