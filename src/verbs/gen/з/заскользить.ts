import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заскользить: PerfectVerb = {
  name: Word('заскользить', 8),
  singular1stPerson: Word('заскольжу', 8),
  singular2ndPerson: Word('заскользишь', 8),
  singular3rdPerson: Word('заскользит', 8),
  plural1stPerson: Word('заскользим', 8),
  plural2ndPerson: Word('заскользите', 8),
  plural3rdPerson: Word('заскользят', 8),
  masculinePast: Word('заскользил', 8),
  femininePast: Word('заскользила', 8),
  neuterPast: Word('заскользило', 8),
  pluralPast: Word('заскользили', 8),
  imperativeInformal: Word('заскользи', 8),
  imperativeFormal: Word('заскользите', 8),
  imperfect: [],
};

perfectVerbs.set(заскользить.name.text, заскользить);

export { заскользить };