import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вредить: PerfectVerb = {
  name: Word('вредить', 4),
  singular1stPerson: Word('врежу', 4),
  singular2ndPerson: Word('вредишь', 4),
  singular3rdPerson: Word('вредит', 4),
  plural1stPerson: Word('вредим', 4),
  plural2ndPerson: Word('вредите', 4),
  plural3rdPerson: Word('вредят', 4),
  masculinePast: Word('вредил', 4),
  femininePast: Word('вредила', 4),
  neuterPast: Word('вредило', 4),
  pluralPast: Word('вредили', 4),
  imperativeInformal: Word('вреди', 4),
  imperativeFormal: Word('вредите', 4),
  imperfect: ['повредить','навредить'],
};

perfectVerbs.set(вредить.name.text, вредить);

export { вредить };