import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поволноваться: PerfectVerb = {
  name: Word('поволноваться', 8),
  singular1stPerson: Word('поволнуюсь', 6),
  singular2ndPerson: Word('поволнуешься', 6),
  singular3rdPerson: Word('поволнуется', 6),
  plural1stPerson: Word('поволнуемся', 6),
  plural2ndPerson: Word('поволнуетесь', 6),
  plural3rdPerson: Word('поволнуются', 6),
  masculinePast: Word('поволновался', 8),
  femininePast: Word('поволновалась', 8),
  neuterPast: Word('поволновалось', 8),
  pluralPast: Word('поволновались', 8),
  imperativeInformal: Word('поволнуйся', 6),
  imperativeFormal: Word('поволнуйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(поволноваться.name.text, поволноваться);

export { поволноваться };