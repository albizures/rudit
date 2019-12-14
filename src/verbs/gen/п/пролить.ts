import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пролить: PerfectVerb = {
  name: Word('пролить', 4),
  singular1stPerson: Word('пролью', 5),
  singular2ndPerson: Word('прольёшь', 2),
  singular3rdPerson: Word('прольёт', 2),
  plural1stPerson: Word('прольём', 2),
  plural2ndPerson: Word('прольёте', 7),
  plural3rdPerson: Word('прольют', 5),
  masculinePast: Word('пролил', 4),
  femininePast: Word('пролила', 6),
  neuterPast: Word('пролило', 4),
  pluralPast: Word('пролили', 4),
  imperativeInformal: Word('пролей', 4),
  imperativeFormal: Word('пролейте', 4),
  imperfect: ['проливать'],
};

perfectVerbs.set(пролить.name.text, пролить);

export { пролить };