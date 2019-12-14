import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перелететь: PerfectVerb = {
  name: Word('перелететь', 7),
  singular1stPerson: Word('перелечу', 7),
  singular2ndPerson: Word('перелетишь', 7),
  singular3rdPerson: Word('перелетит', 7),
  plural1stPerson: Word('перелетим', 7),
  plural2ndPerson: Word('перелетите', 7),
  plural3rdPerson: Word('перелетят', 7),
  masculinePast: Word('перелетел', 7),
  femininePast: Word('перелетела', 7),
  neuterPast: Word('перелетело', 7),
  pluralPast: Word('перелетели', 7),
  imperativeInformal: Word('перелети', 7),
  imperativeFormal: Word('перелетите', 7),
  imperfect: [],
};

perfectVerbs.set(перелететь.name.text, перелететь);

export { перелететь };