import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const гнить: PerfectVerb = {
  name: Word('гнить', 2),
  singular1stPerson: Word('гнию', 3),
  singular2ndPerson: Word('гниёшь', 2),
  singular3rdPerson: Word('гниёт', 2),
  plural1stPerson: Word('гниём', 2),
  plural2ndPerson: Word('гниёте', 5),
  plural3rdPerson: Word('гниют', 3),
  masculinePast: Word('гнил', 2),
  femininePast: Word('гнила', 4),
  neuterPast: Word('гнило', 2),
  pluralPast: Word('гнили', 2),
  imperativeInformal: Word('гний', 2),
  imperativeFormal: Word('гнийте', 2),
  imperfect: ['сгнить'],
};

perfectVerbs.set(гнить.name.text, гнить);

export { гнить };