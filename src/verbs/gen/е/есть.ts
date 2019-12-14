import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const есть: PerfectVerb = {
  name: Word('есть', 0),
  singular1stPerson: Word('ем', 0),
  singular2ndPerson: Word('ешь', 0),
  singular3rdPerson: Word('ест', 0),
  plural1stPerson: Word('едим', 2),
  plural2ndPerson: Word('едите', 2),
  plural3rdPerson: Word('едят', 2),
  masculinePast: Word('ел', 0),
  femininePast: Word('ела', 0),
  neuterPast: Word('ело', 0),
  pluralPast: Word('ели', 0),
  imperativeInformal: Word('ешь', 0),
  imperativeFormal: Word('ешьте', 0),
  imperfect: ['съесть','поесть'],
};

perfectVerbs.set(есть.name.text, есть);

export { есть };