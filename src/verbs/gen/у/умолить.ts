import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const умолить: PerfectVerb = {
  name: Word('умолить', 4),
  singular1stPerson: Word('умолю', 4),
  singular2ndPerson: Word('умолишь', 2),
  singular3rdPerson: Word('умолит', 2),
  plural1stPerson: Word('умолим', 2),
  plural2ndPerson: Word('умолите', 2),
  plural3rdPerson: Word('умолят', 2),
  masculinePast: Word('умолил', 4),
  femininePast: Word('умолила', 4),
  neuterPast: Word('умолило', 4),
  pluralPast: Word('умолили', 4),
  imperativeInformal: Word('умоли', 4),
  imperativeFormal: Word('умолите', 4),
  imperfect: [],
};

perfectVerbs.set(умолить.name.text, умолить);

export { умолить };