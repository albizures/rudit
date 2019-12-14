import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заполнить: PerfectVerb = {
  name: Word('заполнить', 3),
  singular1stPerson: Word('заполню', 3),
  singular2ndPerson: Word('заполнишь', 3),
  singular3rdPerson: Word('заполнит', 3),
  plural1stPerson: Word('заполним', 3),
  plural2ndPerson: Word('заполните', 3),
  plural3rdPerson: Word('заполнят', 3),
  masculinePast: Word('заполнил', 3),
  femininePast: Word('заполнила', 3),
  neuterPast: Word('заполнило', 3),
  pluralPast: Word('заполнили', 3),
  imperativeInformal: Word('заполни', 3),
  imperativeFormal: Word('заполните', 3),
  imperfect: ['заполнять'],
};

perfectVerbs.set(заполнить.name.text, заполнить);

export { заполнить };