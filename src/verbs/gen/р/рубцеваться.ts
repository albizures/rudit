import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рубцеваться: PerfectVerb = {
  name: Word('рубцеваться', 6),
  singular1stPerson: Word('рубцуюсь', 4),
  singular2ndPerson: Word('рубцуешься', 4),
  singular3rdPerson: Word('рубцуется', 4),
  plural1stPerson: Word('рубцуемся', 4),
  plural2ndPerson: Word('рубцуетесь', 4),
  plural3rdPerson: Word('рубцуются', 4),
  masculinePast: Word('рубцевался', 6),
  femininePast: Word('рубцевалась', 6),
  neuterPast: Word('рубцевалось', 6),
  pluralPast: Word('рубцевались', 6),
  imperativeInformal: Word('рубцуйся', 4),
  imperativeFormal: Word('рубцуйтесь', 4),
  imperfect: [],
};

perfectVerbs.set(рубцеваться.name.text, рубцеваться);

export { рубцеваться };