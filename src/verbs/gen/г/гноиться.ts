import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const гноиться: PerfectVerb = {
  name: Word('гноиться', 3),
  singular1stPerson: Word('гноюсь', 3),
  singular2ndPerson: Word('гноишься', 3),
  singular3rdPerson: Word('гноится', 3),
  plural1stPerson: Word('гноимся', 3),
  plural2ndPerson: Word('гноитесь', 3),
  plural3rdPerson: Word('гноятся', 3),
  masculinePast: Word('гноился', 3),
  femininePast: Word('гноилась', 3),
  neuterPast: Word('гноилось', 3),
  pluralPast: Word('гноились', 3),
  imperativeInformal: Word('гноись', 3),
  imperativeFormal: Word('гноитесь', 3),
  imperfect: [],
};

perfectVerbs.set(гноиться.name.text, гноиться);

export { гноиться };