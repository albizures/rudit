import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сохраняться: PerfectVerb = {
  name: Word('сохраняться', 6),
  singular1stPerson: Word('сохраняюсь', 6),
  singular2ndPerson: Word('сохраняешься', 6),
  singular3rdPerson: Word('сохраняется', 6),
  plural1stPerson: Word('сохраняемся', 6),
  plural2ndPerson: Word('сохраняетесь', 6),
  plural3rdPerson: Word('сохраняются', 6),
  masculinePast: Word('сохранялся', 6),
  femininePast: Word('сохранялась', 6),
  neuterPast: Word('сохранялось', 6),
  pluralPast: Word('сохранялись', 6),
  imperativeInformal: Word('сохраняйся', 6),
  imperativeFormal: Word('сохраняйтесь', 6),
  imperfect: ['сохраниться'],
};

perfectVerbs.set(сохраняться.name.text, сохраняться);

export { сохраняться };