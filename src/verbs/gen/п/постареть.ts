import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const постареть: PerfectVerb = {
  name: Word('постареть', 6),
  singular1stPerson: Word('постарею', 6),
  singular2ndPerson: Word('постареешь', 6),
  singular3rdPerson: Word('постареет', 6),
  plural1stPerson: Word('постареем', 6),
  plural2ndPerson: Word('постареете', 6),
  plural3rdPerson: Word('постареют', 6),
  masculinePast: Word('постарел', 6),
  femininePast: Word('постарела', 6),
  neuterPast: Word('постарело', 6),
  pluralPast: Word('постарели', 6),
  imperativeInformal: Word('постарей', 6),
  imperativeFormal: Word('постарейте', 6),
  imperfect: ['стареть'],
};

perfectVerbs.set(постареть.name.text, постареть);

export { постареть };