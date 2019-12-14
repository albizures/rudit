import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скользить: PerfectVerb = {
  name: Word('скользить', 6),
  singular1stPerson: Word('скольжу', 6),
  singular2ndPerson: Word('скользишь', 6),
  singular3rdPerson: Word('скользит', 6),
  plural1stPerson: Word('скользим', 6),
  plural2ndPerson: Word('скользите', 6),
  plural3rdPerson: Word('скользят', 6),
  masculinePast: Word('скользил', 6),
  femininePast: Word('скользила', 6),
  neuterPast: Word('скользило', 6),
  pluralPast: Word('скользили', 6),
  imperativeInformal: Word('скользи', 6),
  imperativeFormal: Word('скользите', 6),
  imperfect: ['скользнуть'],
};

perfectVerbs.set(скользить.name.text, скользить);

export { скользить };