import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const применяться: PerfectVerb = {
  name: Word('применяться', 6),
  singular1stPerson: Word('применяюсь', 6),
  singular2ndPerson: Word('применяешься', 6),
  singular3rdPerson: Word('применяется', 6),
  plural1stPerson: Word('применяемся', 6),
  plural2ndPerson: Word('применяетесь', 6),
  plural3rdPerson: Word('применяются', 6),
  masculinePast: Word('применялся', 6),
  femininePast: Word('применялась', 6),
  neuterPast: Word('применялось', 6),
  pluralPast: Word('применялись', 6),
  imperativeInformal: Word('применяйся', 6),
  imperativeFormal: Word('применяйтесь', 6),
  imperfect: ['примениться'],
};

perfectVerbs.set(применяться.name.text, применяться);

export { применяться };