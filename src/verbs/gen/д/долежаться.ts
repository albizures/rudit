import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const долежаться: PerfectVerb = {
  name: Word('долежаться', 5),
  singular1stPerson: Word('долежусь', 5),
  singular2ndPerson: Word('долежишься', 5),
  singular3rdPerson: Word('долежится', 5),
  plural1stPerson: Word('долежимся', 5),
  plural2ndPerson: Word('долежитесь', 5),
  plural3rdPerson: Word('долежатся', 5),
  masculinePast: Word('долежался', 5),
  femininePast: Word('долежалась', 5),
  neuterPast: Word('долежалось', 5),
  pluralPast: Word('долежались', 5),
  imperativeInformal: Word('долежись', 5),
  imperativeFormal: Word('долежитесь', 5),
  imperfect: [],
};

perfectVerbs.set(долежаться.name.text, долежаться);

export { долежаться };