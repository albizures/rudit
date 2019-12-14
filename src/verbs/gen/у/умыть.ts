import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const умыть: PerfectVerb = {
  name: Word('умыть', 2),
  singular1stPerson: Word('умою', 2),
  singular2ndPerson: Word('умоешь', 2),
  singular3rdPerson: Word('умоет', 2),
  plural1stPerson: Word('умоем', 2),
  plural2ndPerson: Word('умоете', 2),
  plural3rdPerson: Word('умоют', 2),
  masculinePast: Word('умыл', 2),
  femininePast: Word('умыла', 2),
  neuterPast: Word('умыло', 2),
  pluralPast: Word('умыли', 2),
  imperativeInformal: Word('умой', 2),
  imperativeFormal: Word('умойте', 2),
  imperfect: [],
};

perfectVerbs.set(умыть.name.text, умыть);

export { умыть };