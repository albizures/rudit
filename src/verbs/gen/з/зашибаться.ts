import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зашибаться: PerfectVerb = {
  name: Word('зашибаться', 5),
  singular1stPerson: Word('зашибаюсь', 5),
  singular2ndPerson: Word('зашибаешься', 5),
  singular3rdPerson: Word('зашибается', 5),
  plural1stPerson: Word('зашибаемся', 5),
  plural2ndPerson: Word('зашибаетесь', 5),
  plural3rdPerson: Word('зашибаются', 5),
  masculinePast: Word('зашибался', 5),
  femininePast: Word('зашибалась', 5),
  neuterPast: Word('зашибалось', 5),
  pluralPast: Word('зашибались', 5),
  imperativeInformal: Word('зашибайся', 5),
  imperativeFormal: Word('зашибайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(зашибаться.name.text, зашибаться);

export { зашибаться };