import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const умаяться: PerfectVerb = {
  name: Word('умаяться', 2),
  singular1stPerson: Word('умаюсь', 2),
  singular2ndPerson: Word('умаешься', 2),
  singular3rdPerson: Word('умается', 2),
  plural1stPerson: Word('умаемся', 2),
  plural2ndPerson: Word('умаетесь', 2),
  plural3rdPerson: Word('умаются', 2),
  masculinePast: Word('умаялся', 2),
  femininePast: Word('умаялась', 2),
  neuterPast: Word('умаялось', 2),
  pluralPast: Word('умаялись', 2),
  imperativeInformal: Word('умайся', 2),
  imperativeFormal: Word('умайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(умаяться.name.text, умаяться);

export { умаяться };