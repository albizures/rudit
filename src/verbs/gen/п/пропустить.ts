import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пропустить: PerfectVerb = {
  name: Word('пропустить', 7),
  singular1stPerson: Word('пропущу', 6),
  singular2ndPerson: Word('пропустишь', 4),
  singular3rdPerson: Word('пропустит', 4),
  plural1stPerson: Word('пропустим', 4),
  plural2ndPerson: Word('пропустите', 4),
  plural3rdPerson: Word('пропустят', 4),
  masculinePast: Word('пропустил', 7),
  femininePast: Word('пропустила', 7),
  neuterPast: Word('пропустило', 7),
  pluralPast: Word('пропустили', 7),
  imperativeInformal: Word('пропусти', 7),
  imperativeFormal: Word('пропустите', 7),
  imperfect: ['пропускать'],
};

perfectVerbs.set(пропустить.name.text, пропустить);

export { пропустить };