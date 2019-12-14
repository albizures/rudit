import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сгущаться: PerfectVerb = {
  name: Word('сгущаться', 4),
  singular1stPerson: Word('сгущаюсь', 4),
  singular2ndPerson: Word('сгущаешься', 4),
  singular3rdPerson: Word('сгущается', 4),
  plural1stPerson: Word('сгущаемся', 4),
  plural2ndPerson: Word('сгущаетесь', 4),
  plural3rdPerson: Word('сгущаются', 4),
  masculinePast: Word('сгущался', 4),
  femininePast: Word('сгущалась', 4),
  neuterPast: Word('сгущалось', 4),
  pluralPast: Word('сгущались', 4),
  imperativeInformal: Word('сгущайся', 4),
  imperativeFormal: Word('сгущайтесь', 4),
  imperfect: ['сгуститься'],
};

perfectVerbs.set(сгущаться.name.text, сгущаться);

export { сгущаться };