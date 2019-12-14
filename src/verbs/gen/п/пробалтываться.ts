import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пробалтываться: PerfectVerb = {
  name: Word('пробалтываться', 4),
  singular1stPerson: Word('пробалтываюсь', 4),
  singular2ndPerson: Word('пробалтываешься', 4),
  singular3rdPerson: Word('пробалтывается', 4),
  plural1stPerson: Word('пробалтываемся', 4),
  plural2ndPerson: Word('пробалтываетесь', 4),
  plural3rdPerson: Word('пробалтываются', 4),
  masculinePast: Word('пробалтывался', 4),
  femininePast: Word('пробалтывалась', 4),
  neuterPast: Word('пробалтывалось', 4),
  pluralPast: Word('пробалтывались', 4),
  imperativeInformal: Word('пробалтывайся', 4),
  imperativeFormal: Word('пробалтывайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(пробалтываться.name.text, пробалтываться);

export { пробалтываться };