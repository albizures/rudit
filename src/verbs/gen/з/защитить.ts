import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const защитить: PerfectVerb = {
  name: Word('защитить', 5),
  singular1stPerson: Word('защищу', 5),
  singular2ndPerson: Word('защитишь', 5),
  singular3rdPerson: Word('защитит', 5),
  plural1stPerson: Word('защитим', 5),
  plural2ndPerson: Word('защитите', 5),
  plural3rdPerson: Word('защитят', 5),
  masculinePast: Word('защитил', 5),
  femininePast: Word('защитила', 5),
  neuterPast: Word('защитило', 5),
  pluralPast: Word('защитили', 5),
  imperativeInformal: Word('защити', 5),
  imperativeFormal: Word('защитите', 5),
  imperfect: ['защищать'],
};

perfectVerbs.set(защитить.name.text, защитить);

export { защитить };