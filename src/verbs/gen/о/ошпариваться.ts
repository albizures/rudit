import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ошпариваться: PerfectVerb = {
  name: Word('ошпариваться', 3),
  singular1stPerson: Word('ошпариваюсь', 3),
  singular2ndPerson: Word('ошпариваешься', 3),
  singular3rdPerson: Word('ошпаривается', 3),
  plural1stPerson: Word('ошпариваемся', 3),
  plural2ndPerson: Word('ошпариваетесь', 3),
  plural3rdPerson: Word('ошпариваются', 3),
  masculinePast: Word('ошпаривался', 3),
  femininePast: Word('ошпаривалась', 3),
  neuterPast: Word('ошпаривалось', 3),
  pluralPast: Word('ошпаривались', 3),
  imperativeInformal: Word('ошпаривайся', 3),
  imperativeFormal: Word('ошпаривайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(ошпариваться.name.text, ошпариваться);

export { ошпариваться };