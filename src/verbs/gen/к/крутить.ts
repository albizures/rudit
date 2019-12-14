import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const крутить: PerfectVerb = {
  name: Word('крутить', 4),
  singular1stPerson: Word('кручу', 4),
  singular2ndPerson: Word('крутишь', 2),
  singular3rdPerson: Word('крутит', 2),
  plural1stPerson: Word('крутим', 2),
  plural2ndPerson: Word('крутите', 2),
  plural3rdPerson: Word('крутят', 2),
  masculinePast: Word('крутил', 4),
  femininePast: Word('крутила', 4),
  neuterPast: Word('крутило', 4),
  pluralPast: Word('крутили', 4),
  imperativeInformal: Word('крути', 4),
  imperativeFormal: Word('крутите', 4),
  imperfect: ['скрутить','закрутить'],
};

perfectVerbs.set(крутить.name.text, крутить);

export { крутить };