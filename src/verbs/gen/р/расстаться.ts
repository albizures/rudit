import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расстаться: PerfectVerb = {
  name: Word('расстаться', 5),
  singular1stPerson: Word('расстанусь', 5),
  singular2ndPerson: Word('расстанешься', 5),
  singular3rdPerson: Word('расстанется', 5),
  plural1stPerson: Word('расстанемся', 5),
  plural2ndPerson: Word('расстанетесь', 5),
  plural3rdPerson: Word('расстанутся', 5),
  masculinePast: Word('расстался', 5),
  femininePast: Word('рассталась', 5),
  neuterPast: Word('рассталось', 5),
  pluralPast: Word('расстались', 5),
  imperativeInformal: Word('расстанься', 5),
  imperativeFormal: Word('расстаньтесь', 5),
  imperfect: ['расставаться'],
};

perfectVerbs.set(расстаться.name.text, расстаться);

export { расстаться };