import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вскрываться: PerfectVerb = {
  name: Word('вскрываться', 6),
  singular1stPerson: Word('вскрываюсь', 6),
  singular2ndPerson: Word('вскрываешься', 6),
  singular3rdPerson: Word('вскрывается', 6),
  plural1stPerson: Word('вскрываемся', 6),
  plural2ndPerson: Word('вскрываетесь', 6),
  plural3rdPerson: Word('вскрываются', 6),
  masculinePast: Word('вскрывался', 6),
  femininePast: Word('вскрывалась', 6),
  neuterPast: Word('вскрывалось', 6),
  pluralPast: Word('вскрывались', 6),
  imperativeInformal: Word('вскрывайся', 6),
  imperativeFormal: Word('вскрывайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(вскрываться.name.text, вскрываться);

export { вскрываться };