import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const омыть: PerfectVerb = {
  name: Word('омыть', 2),
  singular1stPerson: Word('омою', 2),
  singular2ndPerson: Word('омоешь', 2),
  singular3rdPerson: Word('омоет', 2),
  plural1stPerson: Word('омоем', 2),
  plural2ndPerson: Word('омоете', 2),
  plural3rdPerson: Word('омоют', 2),
  masculinePast: Word('омыл', 2),
  femininePast: Word('омыла', 2),
  neuterPast: Word('омыло', 2),
  pluralPast: Word('омыли', 2),
  imperativeInformal: Word('омой', 2),
  imperativeFormal: Word('омойте', 2),
  imperfect: [],
};

perfectVerbs.set(омыть.name.text, омыть);

export { омыть };