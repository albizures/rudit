import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const возвращаться: PerfectVerb = {
  name: Word('возвращаться', 7),
  singular1stPerson: Word('возвращаюсь', 7),
  singular2ndPerson: Word('возвращаешься', 7),
  singular3rdPerson: Word('возвращается', 7),
  plural1stPerson: Word('возвращаемся', 7),
  plural2ndPerson: Word('возвращаетесь', 7),
  plural3rdPerson: Word('возвращаются', 7),
  masculinePast: Word('возвращался', 7),
  femininePast: Word('возвращалась', 7),
  neuterPast: Word('возвращалось', 7),
  pluralPast: Word('возвращались', 7),
  imperativeInformal: Word('возвращайся', 7),
  imperativeFormal: Word('возвращайтесь', 7),
  imperfect: ['возвратиться','вернуться'],
};

perfectVerbs.set(возвращаться.name.text, возвращаться);

export { возвращаться };