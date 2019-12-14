import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пригвоздить: PerfectVerb = {
  name: Word('пригвоздить', 8),
  singular1stPerson: Word('пригвозжу', 8),
  singular2ndPerson: Word('пригвоздишь', 8),
  singular3rdPerson: Word('пригвоздит', 8),
  plural1stPerson: Word('пригвоздим', 8),
  plural2ndPerson: Word('пригвоздите', 8),
  plural3rdPerson: Word('пригвоздят', 8),
  masculinePast: Word('пригвоздил', 8),
  femininePast: Word('пригвоздила', 8),
  neuterPast: Word('пригвоздило', 8),
  pluralPast: Word('пригвоздили', 8),
  imperativeInformal: Word('пригвозди', 8),
  imperativeFormal: Word('пригвоздите', 8),
  imperfect: [],
};

perfectVerbs.set(пригвоздить.name.text, пригвоздить);

export { пригвоздить };