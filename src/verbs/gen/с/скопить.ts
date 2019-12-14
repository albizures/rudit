import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скопить: PerfectVerb = {
  name: Word('скопить', 4),
  singular1stPerson: Word('скоплю', 5),
  singular2ndPerson: Word('скопишь', 2),
  singular3rdPerson: Word('скопит', 2),
  plural1stPerson: Word('скопим', 2),
  plural2ndPerson: Word('скопите', 2),
  plural3rdPerson: Word('скопят', 2),
  masculinePast: Word('скопил', 4),
  femininePast: Word('скопила', 4),
  neuterPast: Word('скопило', 4),
  pluralPast: Word('скопили', 4),
  imperativeInformal: Word('скопи', 4),
  imperativeFormal: Word('скопите', 4),
  imperfect: [],
};

perfectVerbs.set(скопить.name.text, скопить);

export { скопить };