import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взволноваться: PerfectVerb = {
  name: Word('взволноваться', 8),
  singular1stPerson: Word('взволнуюсь', 6),
  singular2ndPerson: Word('взволнуешься', 6),
  singular3rdPerson: Word('взволнуется', 6),
  plural1stPerson: Word('взволнуемся', 6),
  plural2ndPerson: Word('взволнуетесь', 6),
  plural3rdPerson: Word('взволнуются', 6),
  masculinePast: Word('взволновался', 8),
  femininePast: Word('взволновалась', 8),
  neuterPast: Word('взволновалось', 8),
  pluralPast: Word('взволновались', 8),
  imperativeInformal: Word('взволнуйся', 6),
  imperativeFormal: Word('взволнуйтесь', 6),
  imperfect: ['волноваться'],
};

perfectVerbs.set(взволноваться.name.text, взволноваться);

export { взволноваться };