import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const умыться: PerfectVerb = {
  name: Word('умыться', 2),
  singular1stPerson: Word('умоюсь', 2),
  singular2ndPerson: Word('умоешься', 2),
  singular3rdPerson: Word('умоется', 2),
  plural1stPerson: Word('умоемся', 2),
  plural2ndPerson: Word('умоетесь', 2),
  plural3rdPerson: Word('умоются', 2),
  masculinePast: Word('умылся', 2),
  femininePast: Word('умылась', 2),
  neuterPast: Word('умылось', 2),
  pluralPast: Word('умылись', 2),
  imperativeInformal: Word('умойся', 2),
  imperativeFormal: Word('умойтесь', 2),
  imperfect: ['умываться','мыться'],
};

perfectVerbs.set(умыться.name.text, умыться);

export { умыться };