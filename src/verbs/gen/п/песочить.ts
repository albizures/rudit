import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const песочить: PerfectVerb = {
  name: Word('песочить', 3),
  singular1stPerson: Word('песочу', 3),
  singular2ndPerson: Word('песочишь', 3),
  singular3rdPerson: Word('песочит', 3),
  plural1stPerson: Word('песочим', 3),
  plural2ndPerson: Word('песочите', 3),
  plural3rdPerson: Word('песочат', 3),
  masculinePast: Word('песочил', 3),
  femininePast: Word('песочила', 3),
  neuterPast: Word('песочило', 3),
  pluralPast: Word('песочили', 3),
  imperativeInformal: Word('песочь', 3),
  imperativeFormal: Word('песочьте', 3),
  imperfect: [],
};

perfectVerbs.set(песочить.name.text, песочить);

export { песочить };