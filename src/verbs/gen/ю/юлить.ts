import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const юлить: PerfectVerb = {
  name: Word('юлить', 2),
  singular1stPerson: Word('юлю', 2),
  singular2ndPerson: Word('юлишь', 2),
  singular3rdPerson: Word('юлит', 2),
  plural1stPerson: Word('юлим', 2),
  plural2ndPerson: Word('юлите', 2),
  plural3rdPerson: Word('юлят', 2),
  masculinePast: Word('юлил', 2),
  femininePast: Word('юлила', 2),
  neuterPast: Word('юлило', 2),
  pluralPast: Word('юлили', 2),
  imperativeInformal: Word('юли', 2),
  imperativeFormal: Word('юлите', 2),
  imperfect: [],
};

perfectVerbs.set(юлить.name.text, юлить);

export { юлить };