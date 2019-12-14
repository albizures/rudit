import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const становиться: PerfectVerb = {
  name: Word('становиться', 6),
  singular1stPerson: Word('становлюсь', 7),
  singular2ndPerson: Word('становишься', 4),
  singular3rdPerson: Word('становится', 4),
  plural1stPerson: Word('становимся', 4),
  plural2ndPerson: Word('становитесь', 4),
  plural3rdPerson: Word('становятся', 4),
  masculinePast: Word('становился', 6),
  femininePast: Word('становилась', 6),
  neuterPast: Word('становилось', 6),
  pluralPast: Word('становились', 6),
  imperativeInformal: Word('становись', 6),
  imperativeFormal: Word('становитесь', 6),
  imperfect: ['стать'],
};

perfectVerbs.set(становиться.name.text, становиться);

export { становиться };