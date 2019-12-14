import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пролететь: PerfectVerb = {
  name: Word('пролететь', 6),
  singular1stPerson: Word('пролечу', 6),
  singular2ndPerson: Word('пролетишь', 6),
  singular3rdPerson: Word('пролетит', 6),
  plural1stPerson: Word('пролетим', 6),
  plural2ndPerson: Word('пролетите', 6),
  plural3rdPerson: Word('пролетят', 6),
  masculinePast: Word('пролетел', 6),
  femininePast: Word('пролетела', 6),
  neuterPast: Word('пролетело', 6),
  pluralPast: Word('пролетели', 6),
  imperativeInformal: Word('пролети', 6),
  imperativeFormal: Word('пролетите', 6),
  imperfect: [],
};

perfectVerbs.set(пролететь.name.text, пролететь);

export { пролететь };