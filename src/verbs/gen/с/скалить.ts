import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скалить: PerfectVerb = {
  name: Word('скалить', 2),
  singular1stPerson: Word('скалю', 2),
  singular2ndPerson: Word('скалишь', 2),
  singular3rdPerson: Word('скалит', 2),
  plural1stPerson: Word('скалим', 2),
  plural2ndPerson: Word('скалите', 2),
  plural3rdPerson: Word('скалят', 2),
  masculinePast: Word('скалил', 2),
  femininePast: Word('скалила', 2),
  neuterPast: Word('скалило', 2),
  pluralPast: Word('скалили', 2),
  imperativeInformal: Word('скаль', 2),
  imperativeFormal: Word('скальте', 2),
  imperfect: [],
};

perfectVerbs.set(скалить.name.text, скалить);

export { скалить };