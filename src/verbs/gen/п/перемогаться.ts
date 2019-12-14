import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перемогаться: PerfectVerb = {
  name: Word('перемогаться', 7),
  singular1stPerson: Word('перемогаюсь', 7),
  singular2ndPerson: Word('перемогаешься', 7),
  singular3rdPerson: Word('перемогается', 7),
  plural1stPerson: Word('перемогаемся', 7),
  plural2ndPerson: Word('перемогаетесь', 7),
  plural3rdPerson: Word('перемогаются', 7),
  masculinePast: Word('перемогался', 7),
  femininePast: Word('перемогалась', 7),
  neuterPast: Word('перемогалось', 7),
  pluralPast: Word('перемогались', 7),
  imperativeInformal: Word('перемогайся', 7),
  imperativeFormal: Word('перемогайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(перемогаться.name.text, перемогаться);

export { перемогаться };