import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скривиться: PerfectVerb = {
  name: Word('скривиться', 5),
  singular1stPerson: Word('скривлюсь', 6),
  singular2ndPerson: Word('скривишься', 5),
  singular3rdPerson: Word('скривится', 5),
  plural1stPerson: Word('скривимся', 5),
  plural2ndPerson: Word('скривитесь', 5),
  plural3rdPerson: Word('скривятся', 5),
  masculinePast: Word('скривился', 5),
  femininePast: Word('скривилась', 5),
  neuterPast: Word('скривилось', 5),
  pluralPast: Word('скривились', 5),
  imperativeInformal: Word('скривись', 5),
  imperativeFormal: Word('скривитесь', 5),
  imperfect: [],
};

perfectVerbs.set(скривиться.name.text, скривиться);

export { скривиться };