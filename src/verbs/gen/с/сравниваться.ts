import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сравниваться: PerfectVerb = {
  name: Word('сравниваться', 2),
  singular1stPerson: Word('сравниваюсь', 2),
  singular2ndPerson: Word('сравниваешься', 2),
  singular3rdPerson: Word('сравнивается', 2),
  plural1stPerson: Word('сравниваемся', 2),
  plural2ndPerson: Word('сравниваетесь', 2),
  plural3rdPerson: Word('сравниваются', 2),
  masculinePast: Word('сравнивался', 2),
  femininePast: Word('сравнивалась', 2),
  neuterPast: Word('сравнивалось', 2),
  pluralPast: Word('сравнивались', 2),
  imperativeInformal: Word('сравнивайся', 2),
  imperativeFormal: Word('сравнивайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(сравниваться.name.text, сравниваться);

export { сравниваться };