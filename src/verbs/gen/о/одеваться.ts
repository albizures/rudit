import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const одеваться: PerfectVerb = {
  name: Word('одеваться', 4),
  singular1stPerson: Word('одеваюсь', 4),
  singular2ndPerson: Word('одеваешься', 4),
  singular3rdPerson: Word('одевается', 4),
  plural1stPerson: Word('одеваемся', 4),
  plural2ndPerson: Word('одеваетесь', 4),
  plural3rdPerson: Word('одеваются', 4),
  masculinePast: Word('одевался', 4),
  femininePast: Word('одевалась', 4),
  neuterPast: Word('одевалось', 4),
  pluralPast: Word('одевались', 4),
  imperativeInformal: Word('одевайся', 4),
  imperativeFormal: Word('одевайтесь', 4),
  imperfect: ['одеться'],
};

perfectVerbs.set(одеваться.name.text, одеваться);

export { одеваться };