import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сократить: PerfectVerb = {
  name: Word('сократить', 6),
  singular1stPerson: Word('сокрачу', 6),
  singular2ndPerson: Word('сократишь', 6),
  singular3rdPerson: Word('сократит', 6),
  plural1stPerson: Word('сократим', 6),
  plural2ndPerson: Word('сократите', 6),
  plural3rdPerson: Word('сократят', 6),
  masculinePast: Word('сократил', 6),
  femininePast: Word('сократила', 6),
  neuterPast: Word('сократило', 6),
  pluralPast: Word('сократили', 6),
  imperativeInformal: Word('сократи', 6),
  imperativeFormal: Word('сократите', 6),
  imperfect: ['сокращать'],
};

perfectVerbs.set(сократить.name.text, сократить);

export { сократить };