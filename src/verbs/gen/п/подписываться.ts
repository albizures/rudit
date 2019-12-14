import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подписываться: PerfectVerb = {
  name: Word('подписываться', 4),
  singular1stPerson: Word('подписываюсь', 4),
  singular2ndPerson: Word('подписываешься', 4),
  singular3rdPerson: Word('подписывается', 4),
  plural1stPerson: Word('подписываемся', 4),
  plural2ndPerson: Word('подписываетесь', 4),
  plural3rdPerson: Word('подписываются', 4),
  masculinePast: Word('подписывался', 4),
  femininePast: Word('подписывалась', 4),
  neuterPast: Word('подписывалось', 4),
  pluralPast: Word('подписывались', 4),
  imperativeInformal: Word('подписывайся', 4),
  imperativeFormal: Word('подписывайтесь', 4),
  imperfect: ['подписаться'],
};

perfectVerbs.set(подписываться.name.text, подписываться);

export { подписываться };