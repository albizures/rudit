import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заметить: PerfectVerb = {
  name: Word('заметить', 3),
  singular1stPerson: Word('замечу', 3),
  singular2ndPerson: Word('заметишь', 3),
  singular3rdPerson: Word('заметит', 3),
  plural1stPerson: Word('заметим', 3),
  plural2ndPerson: Word('заметите', 3),
  plural3rdPerson: Word('заметят', 3),
  masculinePast: Word('заметил', 3),
  femininePast: Word('заметила', 3),
  neuterPast: Word('заметило', 3),
  pluralPast: Word('заметили', 3),
  imperativeInformal: Word('заметь', 3),
  imperativeFormal: Word('заметьте', 3),
  imperfect: ['замечать'],
};

perfectVerbs.set(заметить.name.text, заметить);

export { заметить };