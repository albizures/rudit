import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const простить: PerfectVerb = {
  name: Word('простить', 5),
  singular1stPerson: Word('прощу', 4),
  singular2ndPerson: Word('простишь', 5),
  singular3rdPerson: Word('простит', 5),
  plural1stPerson: Word('простим', 5),
  plural2ndPerson: Word('простите', 5),
  plural3rdPerson: Word('простят', 5),
  masculinePast: Word('простил', 5),
  femininePast: Word('простила', 5),
  neuterPast: Word('простило', 5),
  pluralPast: Word('простили', 5),
  imperativeInformal: Word('прости', 5),
  imperativeFormal: Word('простите', 5),
  imperfect: ['прощать'],
};

perfectVerbs.set(простить.name.text, простить);

export { простить };