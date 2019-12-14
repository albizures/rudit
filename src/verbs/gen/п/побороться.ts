import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const побороться: PerfectVerb = {
  name: Word('побороться', 5),
  singular1stPerson: Word('поборюсь', 5),
  singular2ndPerson: Word('поборешься', 3),
  singular3rdPerson: Word('поборется', 3),
  plural1stPerson: Word('поборемся', 3),
  plural2ndPerson: Word('поборетесь', 3),
  plural3rdPerson: Word('поборются', 3),
  masculinePast: Word('поборолся', 5),
  femininePast: Word('поборолась', 5),
  neuterPast: Word('поборолось', 5),
  pluralPast: Word('поборолись', 5),
  imperativeInformal: Word('поборись', 5),
  imperativeFormal: Word('поборитесь', 5),
  imperfect: [],
};

perfectVerbs.set(побороться.name.text, побороться);

export { побороться };