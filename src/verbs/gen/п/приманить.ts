import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приманить: PerfectVerb = {
  name: Word('приманить', 6),
  singular1stPerson: Word('приманю', 6),
  singular2ndPerson: Word('приманишь', 4),
  singular3rdPerson: Word('приманит', 4),
  plural1stPerson: Word('приманим', 4),
  plural2ndPerson: Word('приманите', 4),
  plural3rdPerson: Word('приманят', 4),
  masculinePast: Word('приманил', 6),
  femininePast: Word('приманила', 6),
  neuterPast: Word('приманило', 6),
  pluralPast: Word('приманили', 6),
  imperativeInformal: Word('примани', 6),
  imperativeFormal: Word('приманите', 6),
  imperfect: ['приманивать'],
};

perfectVerbs.set(приманить.name.text, приманить);

export { приманить };