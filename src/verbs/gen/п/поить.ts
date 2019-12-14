import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поить: PerfectVerb = {
  name: Word('поить', 2),
  singular1stPerson: Word('пою', 2),
  singular2ndPerson: Word('поишь', 1),
  singular3rdPerson: Word('поит', 1),
  plural1stPerson: Word('поим', 1),
  plural2ndPerson: Word('поите', 1),
  plural3rdPerson: Word('поят', 1),
  masculinePast: Word('поил', 2),
  femininePast: Word('поила', 2),
  neuterPast: Word('поило', 2),
  pluralPast: Word('поили', 2),
  imperativeInformal: Word('пои', 2),
  imperativeFormal: Word('поите', 2),
  imperfect: ['напоить'],
};

perfectVerbs.set(поить.name.text, поить);

export { поить };