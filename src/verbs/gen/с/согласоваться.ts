import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const согласоваться: PerfectVerb = {
  name: Word('согласоваться', 8),
  singular1stPerson: Word('согласуюсь', 6),
  singular2ndPerson: Word('согласуешься', 6),
  singular3rdPerson: Word('согласуется', 6),
  plural1stPerson: Word('согласуемся', 6),
  plural2ndPerson: Word('согласуетесь', 6),
  plural3rdPerson: Word('согласуются', 6),
  masculinePast: Word('согласовался', 8),
  femininePast: Word('согласовалась', 8),
  neuterPast: Word('согласовалось', 8),
  pluralPast: Word('согласовались', 8),
  imperativeInformal: Word('согласуйся', 6),
  imperativeFormal: Word('согласуйтесь', 6),
  imperfect: ['согласовываться'],
};

perfectVerbs.set(согласоваться.name.text, согласоваться);

export { согласоваться };