import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const родить: PerfectVerb = {
  name: Word('родить', 3),
  singular1stPerson: Word('рожу', 3),
  singular2ndPerson: Word('родишь', 3),
  singular3rdPerson: Word('родит', 3),
  plural1stPerson: Word('родим', 3),
  plural2ndPerson: Word('родите', 3),
  plural3rdPerson: Word('родят', 3),
  masculinePast: Word('родил', 3),
  femininePast: Word('родила', 5),
  neuterPast: Word('родило', 3),
  pluralPast: Word('родили', 3),
  imperativeInformal: Word('роди', 3),
  imperativeFormal: Word('родите', 3),
  imperfect: ['рожать'],
};

perfectVerbs.set(родить.name.text, родить);

export { родить };